import { Stack } from "expo-router";
import NavBar from "./components/NavBar";

export default function HomeLayout(){
    return (
        <>
            <Stack
            initialRouteName="index"
            screenOptions={{
                headerStyle: {
                backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                fontWeight: "bold",
                },
            }}
            />
        </>  

    );
}