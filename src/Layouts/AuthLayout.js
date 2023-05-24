export default function AuthLayout({ children }) {
    return (
        <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-screen pt-10">
            <div className="mx-auto max-w-lg shadow-lg rounded-lg border p-8 bg-white">

                {children}

            </div>
        </div>
    )
}