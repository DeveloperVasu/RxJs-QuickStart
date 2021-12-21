/*Array of data*/
import {names, storeDataOnServer, storeDataOnServerError} from './fakeData'

/*Async Data*/
names.subscribe(value => {console.log(value)})
storeDataOnServer('Store this data on Server').subscribe(value => {
    console.log(value)
})

/*Async Data with error*/
storeDataOnServerError('Store error message').subscribe({
    next: (value)=>{console.log(value)},
    error: err => {console.log(err)}
})
