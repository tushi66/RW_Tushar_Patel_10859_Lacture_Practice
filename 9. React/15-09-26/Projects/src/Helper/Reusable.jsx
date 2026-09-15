export const getAuthErrorMessage = (error) => {

    if(!error){
        return 'Somthing went Wrong. Please try Again'

    }

    if(!error.response && !error.request){

        return error.message || 'Somthing went Wrong. Please try Again'

    }

    if(!error.request && !error.response){
        return 'Make sure your JSON-Server is running  '
    }

    const status = error.response?.status

    if(status === 404 ){
        return "Make sure json-server is running. The 'user' : []  is data.json"
    }

    if(status>= 500){
        return 'Server Error'
    }

    return  error.message || 'Somthing went Wrong'
}