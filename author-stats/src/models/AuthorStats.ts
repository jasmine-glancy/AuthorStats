// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class authorStats {
    constructor(
        public name: string,
        public image: string,
        public alt: string,
        public info: string,
        public id?: ObjectId
    ) {}
}