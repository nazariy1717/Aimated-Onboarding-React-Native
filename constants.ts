import {ImageProps} from "react-native";

export const BGCOLOR = '#f1f1f1';

export interface PagesInterface extends Pick<ImageProps, 'source'>{
    title: string,
    description: string;
}

export const PAGES: PagesInterface[] = [
    {
        title: 'Page 1',
        description: 'lorem ipsum dolor sit de et',
        source: require('./assets/skates/01.png')
    },
    {
        title: 'Page 2',
        description: 'lorem ipsum dolor sit de et',
        source: require('./assets/skates/02.png')
    },
    {
        title: 'Page 3',
        description: 'lorem ipsum dolor sit de et',
        source: require('./assets/skates/03.png')
    }
];