//Import Image
import athlete from "./img/athlete-small.png";
import theracer from "./img/theracer-small.png";
import goodtimes from "./img/goodtimes-small.png";
import athlete2 from "./img/athlete2.png";
import theracer2 from "./img/the-racer2.jpg";
import goodtimes2 from "./img/good-times2.jpg";

export const MovieState = () => {
    return [
        {
            title: 'The Athlete',
            mainImg: athlete,
            secondaryImg: athlete2,
            url: '/work/the-athlete',
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Its okay ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
            ]
        },
        {
            title: 'Good Times',
            mainImg: goodtimes,
            secondaryImg: goodtimes2,
            url: '/work/good-times',
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Its okay ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
            ]
        },
        {
            title: 'The Racer',
            mainImg: theracer,
            secondaryImg: theracer2,
            url: '/work/the-racer',
            awards: [
                {
                    title: 'Truly a masterpiece',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Fresh look on a brutal sport.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
                {
                    title: 'Its okay ',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum, blanditiis corporis quasi aperiam velit!',
                },
            ]
        },
    ]
}