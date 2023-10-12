import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { MainRouter } from './router';
/**
 * App.tsx imports global styles and allows adding global providers
 */
function App() {
    return (
        <>
            <MantineProvider defaultColorScheme='dark'>
                <MainRouter />
            </MantineProvider>
        </>
    )
}

export default App
