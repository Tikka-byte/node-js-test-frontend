export default function LoadingAnimation() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black/50 fixed top-0 left-0 z-50">
            <div className="w-[100px] h-[100px] border-6 border-accent border-t-transparent rounded-full animate-spin">
            </div>
        </div>
    );
}