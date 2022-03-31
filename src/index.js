import app from './app';


const main = async () => {

    await app.listen(app.get('PORT'));
    
    console.log(`Server on port ${app.get('PORT')}`)
}

main();