import { defineStore } from "/_nuxt/node_modules/.cache/vite/client/deps/pinia.js?v=b44a2d30";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    isModalOpen: false,
    currentModal: "home",
    user: {
      email: "",
      firstName: "",
      surName: "",
      imageUrl: ""
    }
  }),
  actions: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    setCurrentModal(modal, data) {
      this.currentModal = modal;
      this.user.email = data;
    },
    setUserData(data) {
      this.user.email = data.email;
      this.user.firstName = data.firstName;
      this.user.surName = data.surName;
    },
    setImageUrl(url) {
      this.user.imageUrl = url;
    }
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhTdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbWFpbCB9IGZyb20gXCJAdnVlbGlkYXRlL3ZhbGlkYXRvcnNcIjtcbmltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSBcInBpbmlhXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RvcmUgPSBkZWZpbmVTdG9yZShcImF1dGhcIiwge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICBpc01vZGFsT3BlbjogZmFsc2UsXG4gICAgY3VycmVudE1vZGFsOiBcImhvbWVcIixcbiAgICB1c2VyOiB7XG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIGZpcnN0TmFtZTogXCJcIixcbiAgICAgIHN1ck5hbWU6IFwiXCIsXG4gICAgICBpbWFnZVVybDogXCJcIlxuICAgIH1cbiAgfSksXG4gIGFjdGlvbnM6IHtcbiAgICBvcGVuTW9kYWwoKSB7XG4gICAgICB0aGlzLmlzTW9kYWxPcGVuID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICB0aGlzLmlzTW9kYWxPcGVuID0gZmFsc2U7XG4gICAgfSxcbiAgICBzZXRDdXJyZW50TW9kYWwobW9kYWw6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XG4gICAgICB0aGlzLmN1cnJlbnRNb2RhbCA9IG1vZGFsO1xuICAgICAgdGhpcy51c2VyLmVtYWlsID0gZGF0YTtcbiAgICB9LFxuICAgIHNldFVzZXJEYXRhKGRhdGE6IHsgZmlyc3ROYW1lOiBzdHJpbmc7IHN1ck5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9KSB7XG4gICAgICB0aGlzLnVzZXIuZW1haWwgPSBkYXRhLmVtYWlsO1xuICAgICAgdGhpcy51c2VyLmZpcnN0TmFtZSA9IGRhdGEuZmlyc3ROYW1lO1xuICAgICAgdGhpcy51c2VyLnN1ck5hbWUgPSBkYXRhLnN1ck5hbWU7XG4gICAgfSxcblxuICAgIHNldEltYWdlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgICB0aGlzLnVzZXIuaW1hZ2VVcmwgPSB1cmw7XG4gICAgfVxuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBUyxtQkFBbUI7QUFFckIsYUFBTSxlQUFlLFlBQVksUUFBUTtBQUFBLEVBQzlDLE9BQU8sT0FBTztBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsY0FBYztBQUFBLElBQ2QsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQ1YsV0FBSyxjQUFjO0FBQUEsSUFDckI7QUFBQSxJQUNBLGFBQWE7QUFDWCxXQUFLLGNBQWM7QUFBQSxJQUNyQjtBQUFBLElBQ0EsZ0JBQWdCLE9BQWUsTUFBYztBQUMzQyxXQUFLLGVBQWU7QUFDcEIsV0FBSyxLQUFLLFFBQVE7QUFBQSxJQUNwQjtBQUFBLElBQ0EsWUFBWSxNQUE2RDtBQUN2RSxXQUFLLEtBQUssUUFBUSxLQUFLO0FBQ3ZCLFdBQUssS0FBSyxZQUFZLEtBQUs7QUFDM0IsV0FBSyxLQUFLLFVBQVUsS0FBSztBQUFBLElBQzNCO0FBQUEsSUFFQSxZQUFZLEtBQWE7QUFDdkIsV0FBSyxLQUFLLFdBQVc7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsIm5hbWVzIjpbXX0=