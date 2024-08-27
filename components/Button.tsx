import { TouchableOpacity, Text, StyleSheet } from "react-native";


import COLORS from "@/src/styles/tokens";

interface ButtonProps {
    title: string;
    type?: 'primary' | 'warning' | 'danger' | 'success';
    size?: 'normal' | 'small'
}

export const Button: React.FC<ButtonProps> = ({ title, type = 'primary', size = 'normal' }) => {

    const getBackgroundColor = () => {
        switch (type) {
            case 'warning':
                return COLORS.warning;
            case 'danger':
                return COLORS.danger;
            case 'success':
                return COLORS.success;
            case 'primary':
                return COLORS.primary;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.button,
                size == 'small' && styles.buttonSmall,
                { backgroundColor: getBackgroundColor() },
            ]}
            activeOpacity={0.8}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        borderTopStartRadius: 50,
        borderBottomStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
        width: "100%",
        height: 54,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonSmall: {
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        borderTopStartRadius: 50,
        borderBottomStartRadius: 50,
        borderTopEndRadius: 50,
        borderBottomEndRadius: 50,
        width: "48%",
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold"
    },
});
