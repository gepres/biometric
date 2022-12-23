import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const usePagination = () => {
  // const {page, total_pages, length_page,total_data,init} = ref(null)
  const page = ref(0)
  const total_pages= ref(0)
  const length_page = ref(0)
  const total_data = ref(null)
  total_pages.value = 1
  length_page.value = 20
  const manageData = ({total,totalPages}) => {
    console.log(total,totalPages);
    total_data.value = total;
    total_pages.value = totalPages;
    if (page == 1) {
      total_data.value = total;
      total_pages.value = totalPages;
    }
    if (totalPages == 0) {
      total_data.value = 0;
      total_pages.value = 0 ;
      page.value = 1
    }
    console.log(total_data.value,total_pages.value);
  }

  return {
    page,
    total_pages,
    length_page,
    total_data,
    manageData
  }
}
export default usePagination;