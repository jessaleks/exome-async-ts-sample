import {Exome} from 'exome';

class JokeStore extends Exome {
    public joke: string = "";

    public async fetchJoke(): Promise<void> {
        this.joke = await fetch('https://official-joke-api.appspot.com/random_joke').then<string>(response => response.json())
    }
}

export const jokeStore: JokeStore = new JokeStore();