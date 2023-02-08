const ALLOWED_AGE = 18;

const checkAge = (age) => {
	return new Promise((resolve, reject) => {
		const isAgeOk = age >= ALLOWED_AGE ? true : false;
        console.log(isAgeOk);
		isAgeOk ? resolve('Seems like you can go in') : reject('Sorry,You are not allowed to go in');
	});
};

const doubleCheck = () => {
	return new Promise((resolve, reject) => {
		console.log('But to be sure let me check again.');
		setTimeout(() => resolve('Well, your age is fine. You can go in :)'), 1000);
	});
};
// Promise solution
/*
checkAge(50)
    .then((success) => {
        console.log(success)
        return doubleCheck()
    })
    .then((successCheck) => {
        console.log(successCheck);
    })
    .then(() => {
        console.log('Verification completed.');
    })
    .catch((error) => console.log(error))
*/


// Async & await solution
const alternative = async () => {
    try {
        await checkAge(20)
        console.log('Seems like you can go in');
        await doubleCheck()
        console.log('Well, your age is fine. You can go in :)');
        console.log('Verification completed.');

    }
    catch {
        console.error('Sorry, You are not allowed to go in');
    }
}

alternative()