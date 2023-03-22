import { Injectable } from '@angular/core';
import { Post } from './about.model';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    private posts: Post[];

    constructor() {
        this.posts = [
            {
                text: 'I live in Orlando, Florida with my wonderful wife Susie and our two amazing dogs Rosie and Tito.',
                url: '../../assets/susie.png'
            },
            {
                text: "I got my start in the tech industry in 2020 when I enrolled in Hack Reactor, an Immersive Software Engineering Bootcamp. It was the best career choice I ever made! I seek out and thrive in environments where I'm intellectually stimulated, and software development provides just that, because the learning never ends.",
                url: '../../assets/main-image.png'
            },
            {
                text: 'Traveling is a passion, I want to see as much of the world as possible and experience other cultures.',
                url: '../../assets/rome.png'
            },
            {
                text: "I'm a problem solver, I love tinkering with systems, figuring out how they work, and solving problems.",
                url: '../../assets/brain.jpg'
            },
            {
                text: "I'm a science and space junkie. I love reading about the latest discoveries being made and am constantly amazed by advances in technology. Being able to see back 13.7 billion years with the JWST is mind boggling.",
                url: '../../assets/jameswebb.jpg'
            },
            {
                text: "Who Dat? I'm a Saints fan through and through. If Brady is the GOAT Brees is Baby GOAT. Oh and I'll crush you in Madden any day any time.",
                url: '../../assets/drew.jpg'
            },
            {
                text: "A programmer's wife asks him, 'Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer goes to the store and returns home with 12 loaves of bread. 'They had eggs,' he explained."
                ,
                url: '../../assets/programming-meme.webp'
            },
            {
                text: "For me, I am driven by two main philosophies, know more today about the world than I knew yesterday. And along the way, lessen the suffering of others. You'd be surprised how far that gets you. - NDT",
                url: '../../../../assets/neil_tyson.jpg'
            },
            {
                text: 'The world just wouldnt be as good without the love from our pets. And these pups are two of the best!',
                url: '../../assets/pups.png'
            },
        ];
    }

    getPosts(): Post[] {
        return this.posts;
    }
}
