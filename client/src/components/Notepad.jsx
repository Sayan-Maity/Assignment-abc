import { useEffect, useState } from "react"
import axios from 'axios'
import toast from 'react-hot-toast'

const Notepad = () => {
    const [notepadItems, setNotepadItems] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loadingAdd, setLoadingAdd] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    useEffect(() => {
        const fetchNotepadItems = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/getNotepadItems`)
                setNotepadItems(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchNotepadItems()
    }, [notepadItems])
    
    const handleAddNotepadItem = async () => {
        setLoadingAdd(true)
        if (title === "" || content === "") {
            setLoadingAdd(false)
            toast.error("Please fill all the fields!", {
                icon: "⚠️",
            });
            return;
        } else {
            try {
                await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/postNotepadItems`, {
                    title: title,
                    content: content
                })
                setLoadingAdd(false)
                setTitle("")
                setContent("")
                toast.success("Added successfully!", {
                    icon: "✅",
                });
            }
            catch (error) {
                setLoadingAdd(false)
                console.log(error)
            }
        }
    }

    const handleDeleteNotepadItem = async (id) => {
        setLoadingDelete(true)

        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}/api/deleteNotepadItem/${id}`)
            setLoadingDelete(false)
            toast.success("Deleted successfully!", {
                icon: "✅",
            });
            setNotepadItems(notepadItems.filter(item => item._id !== id))
        }
        catch (error) {
            setLoadingDelete(false)
            console.log(error)
        }
    }


    return (
        <div className="w-[100%] lg:w-[800px] flex flex-col items-center gap-10 mt-6">

            <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="rounded-md px-4 py-1 outline-transparent" />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Description" className="rounded-md px-4 py-1 outline-transparent" />
                <button
                    onClick={handleAddNotepadItem}
                    className="bg-green-300 px-5 py-2 rounded-md w-[6rem]">{loadingAdd ? 'Adding...' : 'Add'}</button>
            </div>

            <div className="flex flex-wrap gap-6">
                {
                    notepadItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex flex-col gap-4 shadow-md w-[15em] rounded-md p-6 bg-white">
                            <div>
                                <p className="text-xl">{item.title}</p>
                                <p>{item.content}</p>
                            </div>
                            <button
                                onClick={() => handleDeleteNotepadItem(item._id)}
                                className="bg-red-300 px-5 py-2 rounded-md" >Delete</button>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Notepad
