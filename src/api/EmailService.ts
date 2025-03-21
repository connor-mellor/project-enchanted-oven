type EmailDetails = {
    name: string;
    email: string;
    category: string;
    cakeType: string;
    dietaryRequirements?: string | null
    specialRequests?: string | null
}

type ApiResponse = {
    success: boolean;
    message: string;
    data: object[];
}

export const sendEmail = async (data: EmailDetails) => {
    const baseUrl: string = 'https://localhost:7217';

    try {
        const response: Response = await fetch(`${baseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const result: ApiResponse = await response.json();
        console.log(result);
        
        if (result.success) alert('Email succesfully sent!') // replace this with success modal/popup maybe
        else alert(`Error sending email: ${result.message}`);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}