new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "20.jpeg",
          img2: "25.jpeg",
          img3: "22.jpeg",
          title: "🕳️",
          isOpen: false,
        },
        {
          img1: "23.jpeg",
          img2: "26.jpeg",
          img3: "30.jpeg",
          title: "🤍",
          isOpen: false,
        },
        {
          img1: "33.jpeg",
          img2: "35.jpeg",
          img3: "31.jpeg",
          title: "💚",
          isOpen: false,
        },
        {
          img1: "21.jpeg",
          img2: "24.jpeg",
          img3: "27.jpeg",
          title: "❤️",
          isOpen: false,
        },
        {
          img1: "28.jpeg",
          img2: "29.jpeg",
          img3: "32.jpeg",
          title: "💳",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
