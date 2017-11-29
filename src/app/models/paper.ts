export class Paper {
    id: Number;
    title: string;
    authors: string[];
    university: string;
    domain: string;
    publishDate: Date;
    contentUrl: string;

    constructor(id,
        title,
        authors,
        university,
        domain,
        publlishDate,
        contentUrl) {

        this.id = id;
        this.title = title;
        this.authors = authors;
        this.university = university;
        this.publishDate = publlishDate;
        this.domain = domain;
        this.contentUrl = contentUrl;

    }
}
