<script setup>
import { reactive, watch, ref, onMounted } from 'vue'
import axios from 'axios'
import { inject } from 'vue'
import AppCardList from '../components/AppCardList.vue'

const { cart, addToCart, removeFromCart } = inject('cart')

//массив со всеми продуктами
const items = ref([])

// создание реактивных параметров для поиска и фильтрации
const filters = reactive({
  sortBy: 'name',
  searchQuery: ''
})

//функция которая push в корзину продукт
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    //удаляем по id элемент с помощью slice
    removeFromCart(item)
  }
}

// запись значения из select в переменную для api запроса
const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

// запись значения из iput в переменную для api запроса
const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

//смена отображения лайка
const addToFavorite = async (item) => {
  {
    try {
      //если лайк не стоит, то отправляем по api (post), так же создаем отдельный favorite id
      if (!item.isFavorite) {
        const obj = { parentId: item.id }
        item.isFavorite = true
        const { data } = await axios.post(`https://c377d7930830f31e.mokky.dev/favorites`, obj)
        item.favoriteId = data.id
      }
      //иначе удаляем по id из api и обнуляем id
      else {
        item.isFavorite = false
        await axios.delete(`https://c377d7930830f31e.mokky.dev/favorites/${item.favoriteId}`)

        item.favoriteId = null
      }
    } catch (err) {
      console.log(err, 'add fav err')
    }
  }
}

//запрос массива favorites data и деструкторизировать его в переменную favorites
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://c377d7930830f31e.mokky.dev/favorites`)

    //если в favorites есть какойто из items то у него ставим isFavorite:true
    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)
      //если нету простой возврат
      if (!favorite) {
        return item
      } else {
        //если в избранном списке есть какойто из товаров, возвращаем объект и добовляем isFavorite и favorite.id
        return {
          ...item,
          isFavorite: true,
          favoriteId: favorite.id
        }
      }
    })
  } catch (error) {
    console.log('error favorites load')
    console.log(error)
  }
}

// запрос к api на получения списка товаров
const fetchItems = async () => {
  try {
    // создание параметров для сортировки и input
    const params = {
      sortBy: filters.sortBy
    }

    // если в input пусто то в api вообще не будет запроса по input
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    // скобки чтобы через деструктуризацию вытащить именно значение data из запроса
    // запятая потому что идет как бы сложение строк ссылка + строка из переменой params
    const { data } = await axios.get(
      `https://c377d7930830f31e.mokky.dev/items`,

      {
        params
      }
    )

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (error) {
    console.log('error load')
    console.log(error)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})

watch(filters, async () => {
  await fetchItems()
  await fetchFavorites()
})
</script>

<template>
  <div class="p-10">
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">All cakes</h2>
      <!-- фильтр -->
      <div class="flex gap-4">
        <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
          <option value="name">by name</option>
          <option value="price">by price (cheap)</option>
          <option value="-price">by price (high)</option>
        </select>

        <div class="relative">
          <img class="absolute left-3 top-3" src="/search.svg" />
          <input
            @input="onChangeSearchInput"
            class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400"
            placeholder="search..."
          />
        </div>
      </div>
    </div>

    <div class="mt-10">
      <AppCardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
    </div>
  </div>
</template>
