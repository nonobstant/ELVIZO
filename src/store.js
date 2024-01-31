import { createStore } from 'vuex'

export default createStore({
    state: {
        videos: [
            {
                uuid: "908237387",
                title: "Betting Tips",
                description: "EPL, ProLeague",
                thumbnail: "thmb2.jpg",
                date: "01/02",
            },
            {
                uuid: "907940105",
                title: "Betting Tips",
                description: "EPL, LaLiga",
                thumbnail: "thmb1.jpg",
                date: "31/01",
            }
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