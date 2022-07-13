import * as functions from 'firebase-functions'
import * as express from 'express'
import { addEntry } from './entryController'
import { db } from './config/firebase';
import {cafeReviewList} from 'webApp';



db.collection('cafes').add({
        name: cafeReviewList.name.value,
    });
    cafeReviewList.name.value = '';
    cafeReviewList.review.value = '';