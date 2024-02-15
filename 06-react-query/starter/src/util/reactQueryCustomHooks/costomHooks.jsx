import { useQuery,useMutation, useQueryClient } from "@tanstack/react-query"
import customFetch from "../util"
import { toast } from 'react-toastify';


export const useFetchItems = ()=>{

    const {isLoading,data,isError} = useQuery({
        queryKey: ['tasks'],
        queryFn: async ()=>await customFetch('/')
      })

      return {isLoading,data,isError}
}

export const useToggler = ()=>{

    const queryClient = useQueryClient()

    const {mutate:toggleCkeckbox} = useMutation({
        mutationFn: async(item)=>{ await customFetch.patch(`/${item.id}`,{"isDone": !item.isDone}) },
        onSuccess:()=>{ queryClient.invalidateQueries({hashQueryKey:['tasks']}) }
      })

      return toggleCkeckbox
}

export const useDeleteItem = ()=>{
    const queryClient = useQueryClient()

    const {mutate:deleteTask} = useMutation({
        mutationFn: async(item)=>{ await customFetch.delete(`/${item.id}`) },
        onSuccess:()=>{ queryClient.invalidateQueries({hashQueryKey:['tasks']}) }
      })

      return deleteTask
}

export const useAddItem = ()=>{

    const queryClient = useQueryClient()

    const {mutate:createTask,isLoading} =  useMutation({
       mutationFn: async (task)=>{await customFetch.post('/',{"title":task})},
       onError: (error)=>{toast.error(error.response.data.msg)},
       onSuccess:()=>{queryClient.invalidateQueries({queryKey:['tasks']})
                     toast.success('Successfuly added') }
     })

     return {createTask,isLoading}



}



