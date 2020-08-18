export default class Restoservice {
    url = 'http://localhost:3000/menu';

    
    getMenuItems = async () => {
        const response = await fetch(this.url);

        if (!response.ok) {
            throw new Error('Server error')
        }

        const result = await response.json();
        return result;
        
    }
    
}