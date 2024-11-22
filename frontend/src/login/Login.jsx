import React from 'react'

const Login = () => {

    // la constant user permet de stocker les informations de l'utilisateur et le mot de password
    const [user, setUser] = useState({
        email: "",
        password: ""
    })



    // fonction de changement de l'input de l'utilisateur
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };



    // fonction de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);


        // envoyer les informations de l'utilisateur au backend
        if (user.email && user.password) {
            axios.post("http://localhost:5000/api/auth/login", user)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>

                <div className='section-header text-center'>
                    <h2>Connexion</h2>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Login
