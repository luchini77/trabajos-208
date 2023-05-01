import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router/index'

export const useTareaStore = defineStore('tarea', () => {

  const tareas = ref([])
  const tarea = ref([])
  const tareasFiltradas = ref([])


  const cargarTareas = async () => {

    try {
      const res = await fetch('https://trabajos-208-default-rtdb.firebaseio.com/tareas.json')
      const data = await res.json()

      const arrayTareas = []

      for (let id in data) {
        arrayTareas.push(data[id])
      }

      tareas.value = arrayTareas
      tareasFiltradas.value = arrayTareas

    } catch (error) {
      console.log(error)
    }
  }

  const getTarea = async (tarea) => {

    try {
      const res = await fetch(`https://trabajos-208-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
      })

      const data = await res.json()

      router.push('/home')

    } catch (error) {
      console.log(error)
    }
  }


  const eliminar = async (id) => {
    try {
      await fetch(`https://trabajos-208-default-rtdb.firebaseio.com/tareas/${id}.json`, {
        method: 'DELETE'
      })

      tareasFiltradas.value = tareasFiltradas.value.filter(item => item.id !== id)

    } catch (error) {
      console.log(error)
    }
  }

  const buscarTarea = async(id) => {
    try {
      const res = await fetch(`https://trabajos-208-default-rtdb.firebaseio.com/tareas/${id}.json`)
      const data = await res.json()

      tarea.value = data

    } catch (error) {
      console.log(error)
    }
  }

  const updateTarea = async(tarea) => {
    try {
      const res = await fetch(`https://trabajos-208-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
      })

      const data = await res.json()

      router.push('/home')

    } catch (error) {
      console.log(error)
    }
  };
  
  const filtrarNombre = (texto) => {
    const filtro = tareas.value.filter((tarea) => {
      const nivelApi = tarea.nivel.toLowerCase()

      const nivelInput = texto.toLowerCase();

      if(nivelApi.includes(nivelInput)){
        return tarea;
      }
    });

    tareasFiltradas.value = filtro
  };


  return {
    tarea,
    tareas,
    tareasFiltradas,
    getTarea,
    eliminar,
    cargarTareas,
    buscarTarea,
    updateTarea,
    filtrarNombre,
  }
})