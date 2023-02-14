import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import HeaderOnly from '../Layout/HeaderOnly';

const publicRoutes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/follow",
        element: Following,
        layout: null
    },
    {
        path: "/upload",
        element: Upload,
        layout: HeaderOnly
    }
]

const privateRoutes = []

export { publicRoutes, privateRoutes }