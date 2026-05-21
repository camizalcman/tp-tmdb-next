const MovieSection = () => {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    
    const handleGetItems = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes?limit=0')
            const data = response.data.recipes;
            console.log(data)
            
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.log('Hubo un error', error);
            setError(true);
            setErrorMsg('Hubo en error');
        }
    }

    useEffect(() => {
        handleGetItems();
    }, []);

    return (
        <div>
        </div>
    )
}

export default MovieSection