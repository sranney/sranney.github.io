import {createGlobalStyle, keyframes} from 'styled-components';

const backgroundUrl = 'https://mylearningposts-api.herokuapp.com/images/';
const lightBackground = 'eberhard-grossgasteiger-5P91SF0zNsI-unsplash';
const darkBackground = 'casey-horner-XE2RmuV6ed0-unsplash';

const GlobalStyles = createGlobalStyle`
    body {
        font-weight: bold;
        padding: 0;
        margin: 0;
        font-size: 16px;
        min-height: 100vh;
        font-family: 'Raleway', serif;
        background-image: url(${backgroundUrl}${lightBackground}.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;

        &.dark {
            background-image: url(${backgroundUrl}${darkBackground}.jpg);
        }
        
        &.light {
            background-image: url(${backgroundUrl}${lightBackground}.jpg);
        }
    }
    twitter-widget {
        margin-left: auto;
        margin-right: auto;
    }
    :root {
        --color-neutral-0: #fff;
        --color-neutral-100: #fafafa;
        --color-neutral-200: #f5f5f5;
        --color-neutral-300: #eeeeee;
        --color-neutral-400: #e0e0e0;
        --color-neutral-500: #bdbdbd;
        --color-neutral-600: #9e9e9e;
        --color-neutral-700: #757575;
        --color-neutral-800: #616161;
        --color-neutral-900: #424242;
        --color-neutral-950: #212121;
        --color-neutral-1000: #000;
        --color-neutral-0-alpha-1: rgba(255,255,255,0.1);
        --color-neutral-0-alpha-2: rgba(255,255,255,0.2);
        --color-neutral-0-alpha-3: rgba(255,255,255,0.3);
        --color-neutral-0-alpha-4: rgba(255,255,255,0.4);
        --color-neutral-0-alpha-5: rgba(255,255,255,0.5);
        --color-neutral-0-alpha-6: rgba(255,255,255,0.6);
        --color-neutral-0-alpha-7: rgba(255,255,255,0.7);
        --color-neutral-0-alpha-8: rgba(255,255,255,0.8);
        --color-neutral-0-alpha-9: rgba(255,255,255,0.9);
        --color-neutral-100-alpha-1: rgba(250,250,250,0.1);
        --color-neutral-100-alpha-2: rgba(250,250,250,0.2);
        --color-neutral-100-alpha-3: rgba(250,250,250,0.3);
        --color-neutral-100-alpha-4: rgba(250,250,250,0.4);
        --color-neutral-100-alpha-5: rgba(250,250,250,0.5);
        --color-neutral-100-alpha-6: rgba(250,250,250,0.6);
        --color-neutral-100-alpha-7: rgba(250,250,250,0.7);
        --color-neutral-100-alpha-8: rgba(250,250,250,0.8);
        --color-neutral-100-alpha-9: rgba(250,250,250,0.9);
        --color-neutral-200-alpha-1: rgba(245,245,245,0.1);
        --color-neutral-200-alpha-2: rgba(245,245,245,0.2);
        --color-neutral-200-alpha-3: rgba(245,245,245,0.3);
        --color-neutral-200-alpha-4: rgba(245,245,245,0.4);
        --color-neutral-200-alpha-5: rgba(245,245,245,0.5);
        --color-neutral-200-alpha-6: rgba(245,245,245,0.6);
        --color-neutral-200-alpha-7: rgba(245,245,245,0.7);
        --color-neutral-200-alpha-8: rgba(245,245,245,0.8);
        --color-neutral-200-alpha-9: rgba(245,245,245,0.9);
        --color-neutral-300-alpha-1: rgba(238,238,238,0.1);
        --color-neutral-300-alpha-2: rgba(238,238,238,0.2);
        --color-neutral-300-alpha-3: rgba(238,238,238,0.3);
        --color-neutral-300-alpha-4: rgba(238,238,238,0.4);
        --color-neutral-300-alpha-5: rgba(238,238,238,0.5);
        --color-neutral-300-alpha-6: rgba(238,238,238,0.6);
        --color-neutral-300-alpha-7: rgba(238,238,238,0.7);
        --color-neutral-300-alpha-8: rgba(238,238,238,0.8);
        --color-neutral-300-alpha-9: rgba(238,238,238,0.9);
        --color-neutral-400-alpha-1: rgba(224,224,224,0.1);
        --color-neutral-400-alpha-2: rgba(224,224,224,0.2);
        --color-neutral-400-alpha-3: rgba(224,224,224,0.3);
        --color-neutral-400-alpha-4: rgba(224,224,224,0.4);
        --color-neutral-400-alpha-5: rgba(224,224,224,0.5);
        --color-neutral-400-alpha-6: rgba(224,224,224,0.6);
        --color-neutral-400-alpha-7: rgba(224,224,224,0.7);
        --color-neutral-400-alpha-8: rgba(224,224,224,0.8);
        --color-neutral-400-alpha-9: rgba(224,224,224,0.9);
        --color-neutral-500-alpha-1: rgba(189,189,189,0.1);
        --color-neutral-500-alpha-2: rgba(189,189,189,0.2);
        --color-neutral-500-alpha-3: rgba(189,189,189,0.3);
        --color-neutral-500-alpha-4: rgba(189,189,189,0.4);
        --color-neutral-500-alpha-5: rgba(189,189,189,0.5);
        --color-neutral-500-alpha-6: rgba(189,189,189,0.6);
        --color-neutral-500-alpha-7: rgba(189,189,189,0.7);
        --color-neutral-500-alpha-8: rgba(189,189,189,0.8);
        --color-neutral-500-alpha-9: rgba(189,189,189,0.9);
        --color-neutral-600-alpha-1: rgba(158,158,158,0.1);
        --color-neutral-600-alpha-2: rgba(158,158,158,0.2);
        --color-neutral-600-alpha-3: rgba(158,158,158,0.3);
        --color-neutral-600-alpha-4: rgba(158,158,158,0.4);
        --color-neutral-600-alpha-5: rgba(158,158,158,0.5);
        --color-neutral-600-alpha-6: rgba(158,158,158,0.6);
        --color-neutral-600-alpha-7: rgba(158,158,158,0.7);
        --color-neutral-600-alpha-8: rgba(158,158,158,0.8);
        --color-neutral-600-alpha-9: rgba(158,158,158,0.9);
        --color-neutral-700-alpha-1: rgba(117,117,117,0.1);
        --color-neutral-700-alpha-2: rgba(117,117,117,0.2);
        --color-neutral-700-alpha-3: rgba(117,117,117,0.3);
        --color-neutral-700-alpha-4: rgba(117,117,117,0.4);
        --color-neutral-700-alpha-5: rgba(117,117,117,0.5);
        --color-neutral-700-alpha-6: rgba(117,117,117,0.6);
        --color-neutral-700-alpha-7: rgba(117,117,117,0.7);
        --color-neutral-700-alpha-8: rgba(117,117,117,0.8);
        --color-neutral-700-alpha-9: rgba(117,117,117,0.9);
        --color-neutral-800-alpha-1: rgba(97,97,97,0.1);
        --color-neutral-800-alpha-2: rgba(97,97,97,0.2);
        --color-neutral-800-alpha-3: rgba(97,97,97,0.3);
        --color-neutral-800-alpha-4: rgba(97,97,97,0.4);
        --color-neutral-800-alpha-5: rgba(97,97,97,0.5);
        --color-neutral-800-alpha-6: rgba(97,97,97,0.6);
        --color-neutral-800-alpha-7: rgba(97,97,97,0.7);
        --color-neutral-800-alpha-8: rgba(97,97,97,0.8);
        --color-neutral-800-alpha-9: rgba(97,97,97,0.9);
        --color-neutral-900-alpha-1: rgba(66,66,66,0.1);
        --color-neutral-900-alpha-2: rgba(66,66,66,0.2);
        --color-neutral-900-alpha-3: rgba(66,66,66,0.3);
        --color-neutral-900-alpha-4: rgba(66,66,66,0.4);
        --color-neutral-900-alpha-5: rgba(66,66,66,0.5);
        --color-neutral-900-alpha-6: rgba(66,66,66,0.6);
        --color-neutral-900-alpha-7: rgba(66,66,66,0.7);
        --color-neutral-900-alpha-8: rgba(66,66,66,0.8);
        --color-neutral-900-alpha-9: rgba(66,66,66,0.9);
        --color-neutral-950-alpha-1: rgba(33,33,33,0.1);
        --color-neutral-950-alpha-2: rgba(33,33,33,0.2);
        --color-neutral-950-alpha-3: rgba(33,33,33,0.3);
        --color-neutral-950-alpha-4: rgba(33,33,33,0.4);
        --color-neutral-950-alpha-5: rgba(33,33,33,0.5);
        --color-neutral-950-alpha-6: rgba(33,33,33,0.6);
        --color-neutral-950-alpha-7: rgba(33,33,33,0.7);
        --color-neutral-950-alpha-8: rgba(33,33,33,0.8);
        --color-neutral-950-alpha-9: rgba(33,33,33,0.9);
        --color-neutral-1000-alpha-1: rgba(0,0,0,0.1);
        --color-neutral-1000-alpha-2: rgba(0,0,0,0.2);
        --color-neutral-1000-alpha-3: rgba(0,0,0,0.3);
        --color-neutral-1000-alpha-4: rgba(0,0,0,0.4);
        --color-neutral-1000-alpha-5: rgba(0,0,0,0.5);
        --color-neutral-1000-alpha-6: rgba(0,0,0,0.6);
        --color-neutral-1000-alpha-7: rgba(0,0,0,0.7);
        --color-neutral-1000-alpha-8: rgba(0,0,0,0.8);
        --color-neutral-1000-alpha-9: rgba(0,0,0,0.9);

        --color-primary-0: #eceff1;
        --color-primary-100: #cfd8dc;
        --color-primary-200: #b0bec5;
        --color-primary-300: #90a4ae;
        --color-primary-400: #78909c;
        --color-primary-500: #607d8b;
        --color-primary-600: #546e7a;
        --color-primary-700: #455a64;
        --color-primary-800: #37474f;
        --color-primary-900: #263238;
        --color-primary-0-alpha-1: rgba(236, 239, 241,0.1);
        --color-primary-0-alpha-2: rgba(236, 239, 241,0.2);
        --color-primary-0-alpha-3: rgba(236, 239, 241,0.3);
        --color-primary-0-alpha-4: rgba(236, 239, 241,0.4);
        --color-primary-0-alpha-5: rgba(236, 239, 241,0.5);
        --color-primary-0-alpha-6: rgba(236, 239, 241,0.6);
        --color-primary-0-alpha-7: rgba(236, 239, 241,0.7);
        --color-primary-0-alpha-8: rgba(236, 239, 241,0.8);
        --color-primary-0-alpha-9: rgba(236, 239, 241,0.9);
        --color-primary-100-alpha-1: rgba(207, 216, 220,0.1);
        --color-primary-100-alpha-2: rgba(207, 216, 220,0.2);
        --color-primary-100-alpha-3: rgba(207, 216, 220,0.3);
        --color-primary-100-alpha-4: rgba(207, 216, 220,0.4);
        --color-primary-100-alpha-5: rgba(207, 216, 220,0.5);
        --color-primary-100-alpha-6: rgba(207, 216, 220,0.6);
        --color-primary-100-alpha-7: rgba(207, 216, 220,0.7);
        --color-primary-100-alpha-8: rgba(207, 216, 220,0.8);
        --color-primary-100-alpha-9: rgba(207, 216, 220,0.9);
        --color-primary-200-alpha-1: rgba(176, 190, 197,0.1);
        --color-primary-200-alpha-2: rgba(176, 190, 197,0.2);
        --color-primary-200-alpha-3: rgba(176, 190, 197,0.3);
        --color-primary-200-alpha-4: rgba(176, 190, 197,0.4);
        --color-primary-200-alpha-5: rgba(176, 190, 197,0.5);
        --color-primary-200-alpha-6: rgba(176, 190, 197,0.6);
        --color-primary-200-alpha-7: rgba(176, 190, 197,0.7);
        --color-primary-200-alpha-8: rgba(176, 190, 197,0.8);
        --color-primary-200-alpha-9: rgba(176, 190, 197,0.9);
        --color-primary-300-alpha-1: rgba(144, 164, 174,0.1);
        --color-primary-300-alpha-2: rgba(144, 164, 174,0.2);
        --color-primary-300-alpha-3: rgba(144, 164, 174,0.3);
        --color-primary-300-alpha-4: rgba(144, 164, 174,0.4);
        --color-primary-300-alpha-5: rgba(144, 164, 174,0.5);
        --color-primary-300-alpha-6: rgba(144, 164, 174,0.6);
        --color-primary-300-alpha-7: rgba(144, 164, 174,0.7);
        --color-primary-300-alpha-8: rgba(144, 164, 174,0.8);
        --color-primary-300-alpha-9: rgba(144, 164, 174,0.9);
        --color-primary-400-alpha-1: rgba(120, 144, 156,0.1);
        --color-primary-400-alpha-2: rgba(120, 144, 156,0.2);
        --color-primary-400-alpha-3: rgba(120, 144, 156,0.3);
        --color-primary-400-alpha-4: rgba(120, 144, 156,0.4);
        --color-primary-400-alpha-5: rgba(120, 144, 156,0.5);
        --color-primary-400-alpha-6: rgba(120, 144, 156,0.6);
        --color-primary-400-alpha-7: rgba(120, 144, 156,0.7);
        --color-primary-400-alpha-8: rgba(120, 144, 156,0.8);
        --color-primary-400-alpha-9: rgba(120, 144, 156,0.9);
        --color-primary-500-alpha-1: rgba(96, 125, 139,0.1);
        --color-primary-500-alpha-2: rgba(96, 125, 139,0.2);
        --color-primary-500-alpha-3: rgba(96, 125, 139,0.3);
        --color-primary-500-alpha-4: rgba(96, 125, 139,0.4);
        --color-primary-500-alpha-5: rgba(96, 125, 139,0.5);
        --color-primary-500-alpha-6: rgba(96, 125, 139,0.6);
        --color-primary-500-alpha-7: rgba(96, 125, 139,0.7);
        --color-primary-500-alpha-8: rgba(96, 125, 139,0.8);
        --color-primary-500-alpha-9: rgba(96, 125, 139,0.9);
        --color-primary-600-alpha-1: rgba(84, 110, 122,0.1);
        --color-primary-600-alpha-2: rgba(84, 110, 122,0.2);
        --color-primary-600-alpha-3: rgba(84, 110, 122,0.3);
        --color-primary-600-alpha-4: rgba(84, 110, 122,0.4);
        --color-primary-600-alpha-5: rgba(84, 110, 122,0.5);
        --color-primary-600-alpha-6: rgba(84, 110, 122,0.6);
        --color-primary-600-alpha-7: rgba(84, 110, 122,0.7);
        --color-primary-600-alpha-8: rgba(84, 110, 122,0.8);
        --color-primary-600-alpha-9: rgba(84, 110, 122,0.9);
        --color-primary-700-alpha-1: rgba(69, 90, 100,,0.1);
        --color-primary-700-alpha-2: rgba(69, 90, 100,,0.2);
        --color-primary-700-alpha-3: rgba(69, 90, 100,,0.3);
        --color-primary-700-alpha-4: rgba(69, 90, 100,,0.4);
        --color-primary-700-alpha-5: rgba(69, 90, 100,,0.5);
        --color-primary-700-alpha-6: rgba(69, 90, 100,,0.6);
        --color-primary-700-alpha-7: rgba(69, 90, 100,,0.7);
        --color-primary-700-alpha-8: rgba(69, 90, 100,,0.8);
        --color-primary-700-alpha-9: rgba(69, 90, 100,,0.9);
        --color-primary-800-alpha-1: rgba(55, 71, 79,0.1);
        --color-primary-800-alpha-2: rgba(55, 71, 79,0.2);
        --color-primary-800-alpha-3: rgba(55, 71, 79,0.3);
        --color-primary-800-alpha-4: rgba(55, 71, 79,0.4);
        --color-primary-800-alpha-5: rgba(55, 71, 79,0.5);
        --color-primary-800-alpha-6: rgba(55, 71, 79,0.6);
        --color-primary-800-alpha-7: rgba(55, 71, 79,0.7);
        --color-primary-800-alpha-8: rgba(55, 71, 79,0.8);
        --color-primary-800-alpha-9: rgba(55, 71, 79,0.9);
        --color-primary-900-alpha-1: rgba(38, 50, 56,0.1);
        --color-primary-900-alpha-2: rgba(38, 50, 56,0.2);
        --color-primary-900-alpha-3: rgba(38, 50, 56,0.3);
        --color-primary-900-alpha-4: rgba(38, 50, 56,0.4);
        --color-primary-900-alpha-5: rgba(38, 50, 56,0.5);
        --color-primary-900-alpha-6: rgba(38, 50, 56,0.6);
        --color-primary-900-alpha-7: rgba(38, 50, 56,0.7);
        --color-primary-900-alpha-8: rgba(38, 50, 56,0.8);
        --color-primary-900-alpha-9: rgba(38, 50, 56,0.9);

        --color-accent-0: #e1f5fe;
        --color-accent-100: #b3e5fc;
        --color-accent-200: #81d4fa;
        --color-accent-300: #4fc3f7;
        --color-accent-400: #29b6f6;
        --color-accent-500: #03a9f4;
        --color-accent-600: #039be5;
        --color-accent-700: #0288d1;
        --color-accent-800: #0277bd;
        --color-accent-900: #01579b;
        --color-accent-0-alpha-1: rgba(225, 245, 254,0.1);
        --color-accent-0-alpha-2: rgba(225, 245, 254,0.2);
        --color-accent-0-alpha-3: rgba(225, 245, 254,0.3);
        --color-accent-0-alpha-4: rgba(225, 245, 254,0.4);
        --color-accent-0-alpha-5: rgba(225, 245, 254,0.5);
        --color-accent-0-alpha-6: rgba(225, 245, 254,0.6);
        --color-accent-0-alpha-7: rgba(225, 245, 254,0.7);
        --color-accent-0-alpha-8: rgba(225, 245, 254,0.8);
        --color-accent-0-alpha-9: rgba(225, 245, 254,0.9);
        --color-accent-100-alpha-1: rgba(179, 229, 252,0.1);
        --color-accent-100-alpha-2: rgba(179, 229, 252,0.2);
        --color-accent-100-alpha-3: rgba(179, 229, 252,0.3);
        --color-accent-100-alpha-4: rgba(179, 229, 252,0.4);
        --color-accent-100-alpha-5: rgba(179, 229, 252,0.5);
        --color-accent-100-alpha-6: rgba(179, 229, 252,0.6);
        --color-accent-100-alpha-7: rgba(179, 229, 252,0.7);
        --color-accent-100-alpha-8: rgba(179, 229, 252,0.8);
        --color-accent-100-alpha-9: rgba(179, 229, 252,0.9);
        --color-accent-200-alpha-1: rgba(129, 212, 250,0.1);
        --color-accent-200-alpha-2: rgba(129, 212, 250,0.2);
        --color-accent-200-alpha-3: rgba(129, 212, 250,0.3);
        --color-accent-200-alpha-4: rgba(129, 212, 250,0.4);
        --color-accent-200-alpha-5: rgba(129, 212, 250,0.5);
        --color-accent-200-alpha-6: rgba(129, 212, 250,0.6);
        --color-accent-200-alpha-7: rgba(129, 212, 250,0.7);
        --color-accent-200-alpha-8: rgba(129, 212, 250,0.8);
        --color-accent-200-alpha-9: rgba(129, 212, 250,0.9);
        --color-accent-300-alpha-1: rgba(79, 195, 247,0.1);
        --color-accent-300-alpha-2: rgba(79, 195, 247,0.2);
        --color-accent-300-alpha-3: rgba(79, 195, 247,0.3);
        --color-accent-300-alpha-4: rgba(79, 195, 247,0.4);
        --color-accent-300-alpha-5: rgba(79, 195, 247,0.5);
        --color-accent-300-alpha-6: rgba(79, 195, 247,0.6);
        --color-accent-300-alpha-7: rgba(79, 195, 247,0.7);
        --color-accent-300-alpha-8: rgba(79, 195, 247,0.8);
        --color-accent-300-alpha-9: rgba(79, 195, 247,0.9);
        --color-accent-400-alpha-1: rgba(41, 182, 246,0.1);
        --color-accent-400-alpha-2: rgba(41, 182, 246,0.2);
        --color-accent-400-alpha-3: rgba(41, 182, 246,0.3);
        --color-accent-400-alpha-4: rgba(41, 182, 246,0.4);
        --color-accent-400-alpha-5: rgba(41, 182, 246,0.5);
        --color-accent-400-alpha-6: rgba(41, 182, 246,0.6);
        --color-accent-400-alpha-7: rgba(41, 182, 246,0.7);
        --color-accent-400-alpha-8: rgba(41, 182, 246,0.8);
        --color-accent-400-alpha-9: rgba(41, 182, 246,0.9);
        --color-accent-500-alpha-1: rgba(3, 169, 244,0.1);
        --color-accent-500-alpha-2: rgba(3, 169, 244,0.2);
        --color-accent-500-alpha-3: rgba(3, 169, 244,0.3);
        --color-accent-500-alpha-4: rgba(3, 169, 244,0.4);
        --color-accent-500-alpha-5: rgba(3, 169, 244,0.5);
        --color-accent-500-alpha-6: rgba(3, 169, 244,0.6);
        --color-accent-500-alpha-7: rgba(3, 169, 244,0.7);
        --color-accent-500-alpha-8: rgba(3, 169, 244,0.8);
        --color-accent-500-alpha-9: rgba(3, 169, 244,0.9);
        --color-accent-600-alpha-1: rgba(3, 155, 229,0.1);
        --color-accent-600-alpha-2: rgba(3, 155, 229,0.2);
        --color-accent-600-alpha-3: rgba(3, 155, 229,0.3);
        --color-accent-600-alpha-4: rgba(3, 155, 229,0.4);
        --color-accent-600-alpha-5: rgba(3, 155, 229,0.5);
        --color-accent-600-alpha-6: rgba(3, 155, 229,0.6);
        --color-accent-600-alpha-7: rgba(3, 155, 229,0.7);
        --color-accent-600-alpha-8: rgba(3, 155, 229,0.8);
        --color-accent-600-alpha-9: rgba(3, 155, 229,0.9);
        --color-accent-700-alpha-1: rgba(2, 136, 209,0.1);
        --color-accent-700-alpha-2: rgba(2, 136, 209,0.2);
        --color-accent-700-alpha-3: rgba(2, 136, 209,0.3);
        --color-accent-700-alpha-4: rgba(2, 136, 209,0.4);
        --color-accent-700-alpha-5: rgba(2, 136, 209,0.5);
        --color-accent-700-alpha-6: rgba(2, 136, 209,0.6);
        --color-accent-700-alpha-7: rgba(2, 136, 209,0.7);
        --color-accent-700-alpha-8: rgba(2, 136, 209,0.8);
        --color-accent-700-alpha-9: rgba(2, 136, 209,0.9);
        --color-accent-800-alpha-1: rgba(2, 119, 189,0.1);
        --color-accent-800-alpha-2: rgba(2, 119, 189,0.2);
        --color-accent-800-alpha-3: rgba(2, 119, 189,0.3);
        --color-accent-800-alpha-4: rgba(2, 119, 189,0.4);
        --color-accent-800-alpha-5: rgba(2, 119, 189,0.5);
        --color-accent-800-alpha-6: rgba(2, 119, 189,0.6);
        --color-accent-800-alpha-7: rgba(2, 119, 189,0.7);
        --color-accent-800-alpha-8: rgba(2, 119, 189,0.8);
        --color-accent-800-alpha-9: rgba(2, 119, 189,0.9);
        --color-accent-900-alpha-1: rgba(1, 87, 155,0.1);
        --color-accent-900-alpha-2: rgba(1, 87, 155,0.2);
        --color-accent-900-alpha-3: rgba(1, 87, 155,0.3);
        --color-accent-900-alpha-4: rgba(1, 87, 155,0.4);
        --color-accent-900-alpha-5: rgba(1, 87, 155,0.5);
        --color-accent-900-alpha-6: rgba(1, 87, 155,0.6);
        --color-accent-900-alpha-7: rgba(1, 87, 155,0.7);
        --color-accent-900-alpha-8: rgba(1, 87, 155,0.8);
        --color-accent-900-alpha-9: rgba(1, 87, 155,0.9);

        --font-size-jumbo: 3rem;
        --font-size-xxlarge: 2rem;
        --font-size-xlarge: 1.5rem;
        --font-size-large: 1.25rem;
        --font-size-base: 1rem;
        --font-size-small: .875rem;
        --font-size-xsmall: .75rem;
    }
`;

export default GlobalStyles;