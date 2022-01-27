interface GroupSection2 {
    box: string;
}

interface GroupSection3 {
    box_number_section_3: {text: string};
    box_section_3: {text: string};
}

export interface ElementsSection1 {
    title: string;
    subtitle: string;
    link_button: string;
    old_price: number;
    new_price: number;
}

export interface ElementsSection2 {
    title: string;
    group: GroupSection2[];
    title_2: string;
}

export interface ElementsSection3 {
    title: string;
    group: GroupSection3[];
}

interface GroupSection4 {
    title1: {text: string};
    about: {text: string};
}

export interface ElementsSection4 {
    title: string;
    group: GroupSection4[];
}

export interface ElementsSection5 {
    title: string;
    subtitle: GroupSection4[];
    price: number;
    link_button: string;
}

export interface ElementsSection6 {
    title: string;
    subtitle: string;
    text: string;
}