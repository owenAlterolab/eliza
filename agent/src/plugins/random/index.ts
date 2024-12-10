import { Plugin } from "@ai16z/eliza";
import randomWordAction from "./actions/randomWord";
import randomWeather from "./actions/randomWeather";

const randomPlugin: Plugin = {
    name: "random",
    description: "random Plugin for Eliza",
    actions: [
        randomWordAction,
        randomWeather
    ],
};

export default randomPlugin;