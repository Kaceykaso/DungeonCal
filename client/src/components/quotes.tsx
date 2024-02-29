import { useEffect, useState } from "react";
import axios from "axios";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

interface RandomQuote {
    quote: String;
    author: String;
}

export default function Quotes() {

    const [quotes, setQuotes] = useState([]);
    const [randomQuote, setRandomQuote] = useState<RandomQuote>();

    const getQuotes = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/quotes')
            setQuotes(res.data.quotes)
        } catch (err) {
            console.log(err);
        }
    }

    const generateRandomQuotes = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randomIndex])
        console.log(quotes[randomIndex]);
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
        <div className="md:p-32 px-10 flex items-center justify-center flex-col gap-y-20 bg-black w-full h-[100vh] font-sans">
            {
                randomQuote &&
                <article className="bg-slate-200 shadow-md shadow-slate-50 md:w-auto w-full-10 h-auto rounded-xl p-10 text-black">
                    <p className="flex items-start md:flex-row flex-col gap-x-2 bg-slate-400 p-2 rounded-md shadow-md font-medium mb-3">
                        <ImQuotesLeft />
                        {randomQuote.quote}
                        <ImQuotesRight />
                    </p>
                    <p className="text-gray-500 font-bold">{randomQuote.author}</p>
                </article>
            }
            <button onClick={generateRandomQuotes} className="text-white border border-white p-2 rounded-lg hover:text-black hover:bg-white transition ease-in-out duration-75">Generate Quote</button>
        </div>
    )
}