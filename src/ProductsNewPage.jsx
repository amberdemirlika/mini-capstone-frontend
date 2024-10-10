import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function ProductssNewPage() {
  const navigate = useNavigate();

    
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/recipes.json", params).then(response => {
      console.log(response.data)
      // window.location.href = "/"
      navigate('/');
      
    })
  }

  return (
    <div>
      <p>there will be a form here at some point</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Price: <input type="text" name="price" />
        </div>
        <div>
          Description: <input type="text" name="description" />
        </div>
        <button>Make new recipe</button>
      </form>
    </div>
  );
}


