export default function handler(req, res) {
    if (req.method === 'POST') {
        // Your logic to handle the POST request, like saving to a database
        const { title, content, status } = req.body;
        
        // You can perform actions like saving content to a database here
        
        res.status(201).json({ message: 'Post created successfully' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
