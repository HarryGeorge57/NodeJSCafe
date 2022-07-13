import * as functions from 'firebase-functions'
import * as express from 'express'
import { addEntry } from './entryController'
import { db } from './config/firebase';
import {form} from 'webApp';

db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value
});