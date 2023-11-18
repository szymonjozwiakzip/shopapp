<script>
import "@/style.css";
import axios from "axios";
const { data } = await useFetch("/api/products");
console.log(data.value);
export default {
  data() {
    return {
      item: {
        description: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("/api/add-comment", this.item);

        this.item = {
          description: "",
        };
        const { description } = await useFetch;

        console.log("Dodano komentarz:", response.data);
      } catch (error) {
        console.error("Wystąpił błąd podczas zapisywania komentarza:", error);
      }
    },
  },
};
</script>
