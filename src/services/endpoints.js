import { Component } from "react"

class EndPoint extends Component{
    topRated = () => {
        return 'movie/top_rated'
    }

    upComing = () => {
        return 'movie/upcoming'
    }

    popular = () => {
        return '/movie/popular'
    }

}

export default EndPoint