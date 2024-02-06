import { createStore } from 'vuex'

export default createStore({
    state: {
        videos: [
            {
                uuid: "910071335",
                title: "Betting Tips",
                description: "Bundesliga, AFCON",
                thumbnail: "thmb1.jpg",
                date: "Wednesday 07/02",
            },
            {
                uuid: "909699678",
                title: "Betting Tips",
                description: "Serie A, LaLiga",
                thumbnail: "thmb2.jpg",
                date: "Monday 05/02",
            },
            {
                uuid: "908666985",
                title: "Betting Tips",
                description: "Serie A, LaLiga",
                thumbnail: "thmb3.jpg",
                date: "Friday 02/02",
            },
        ]
    },
    mutations: {
        setVideos(state, videos) {
            state.videos = videos
        }
    },
    actions: {
        fetchVideos({ commit }) {
            // Fetch videos from an API or other source here
            // Then commit the mutation
            // commit('setVideos', fetchedVideos)
        }
    },
    getters: {
        videos: state => state.videos,
        getVideoByUuid: (state) => (uuid) => {
            return state.videos.find(video => video.uuid === uuid)
        }
    }
})