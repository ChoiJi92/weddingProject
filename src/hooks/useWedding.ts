import { getWeddig } from '@/api/wedding'
import { Wedding } from '@/models/wedding'
import { useSuspenseQuery } from '@tanstack/react-query'

function useWedding() {
  const { data, isLoading, error } = useSuspenseQuery<Wedding>({
    queryKey: ['wedding'],
    queryFn: () =>
      getWeddig().then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return response.json()
      }),
  })

  return { wedding: data, isLoading, error }
}

export default useWedding
