# Calculator App - Aplicación de Calculadora Móvil

## 1. Identificación del Proyecto

- **Nombre de la App:** Calculator App
- **Asignatura/Profesor:** Desarrollo de Aplicaciones Móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Octubre 2025
- **URL del Repositorio:** https://github.com/usuario/calculator-app

## 2. Descripción del Proyecto

Calculator App es una aplicación móvil desarrollada con React Native y Expo que proporciona una calculadora funcional con interfaz moderna y elegante. La aplicación cuenta con tema oscuro, historial de operaciones y opciones de configuración personalizables.

### Características Principales:
- 🧮 **Calculadora Funcional**: Operaciones básicas (suma, resta, multiplicación, división)
- 📋 **Historial de Operaciones**: Guarda todas las operaciones realizadas
- ⚙️ **Configuración Personalizable**: Opciones de vibración, sonido y tema
- 🎨 **Interfaz Moderna**: Diseño minimalista con tema oscuro
- 🧭 **Navegación Intuitiva**: Sistema de navegación stack con transiciones suaves
- 🔄 **Funciones Especiales**: Botón de borrado, decimal y limpieza completa

### Funcionalidades Implementadas:
- Operaciones aritméticas básicas (+, -, ×, ÷)
- Pantalla de historial con todas las operaciones
- Pantalla de configuración con ajustes personalizables
- Botón de retroceso para navegación
- Botón de eliminar último dígito
- Display responsivo que muestra resultados
- Estructura de código modular y escalable

## 3. Tecnologías y Versiones Utilizadas

### Stack Tecnológico:
- **React Native:** 0.81.4
- **React:** 19.1.0
- **Expo:** ~54.0.3
- **React Navigation:** v7.1.17 (Native Stack v7.3.26)
- **React Native Screens:** ~4.16.0
- **React Native Safe Area Context:** ~5.6.0

### Herramientas de Desarrollo Requeridas:

- **Node.js:** v18.17.0 o superior
  ```bash
  node --version
  ```
- **NPM:** 9.0.0+ o Yarn v1.22.19+
  ```bash
  npm --version
  # o
  yarn --version
  ```
- **Expo CLI:** v6.3.0+
  ```bash
  npx expo --version
  ```
- **Android Studio:** v2022.3+ con Android SDK 33+ **o** Expo Go app en dispositivo físico
  ```bash
  # Verificar Android SDK
  adb --version
  ```

### Verificación de Entorno:
```bash
npx expo doctor
```

## 4. Estructura del Proyecto

### Organización de Archivos:
```
calculator-app/
├── App.js                          # Componente principal de la aplicación
├── app.json                        # Configuración de Expo
├── package.json                    # Dependencias y scripts
├── index.js                        # Punto de entrada
├── assets/                         # Recursos estáticos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
└── src/
    ├── navigations/                # Configuración de navegación
    │   ├── AppNavigation.js
    │   └── index.js
    ├── screens/                    # Pantallas de la aplicación
    │   ├── Home/
    │   │   ├── index.js
    │   │   └── HomeScreen.js
    │   └── Calculator/
    │       ├── index.js
    │       ├── CalculatorScreen.js
    │       ├── HistoryScreen.js
    │       └── SettingsScreen.js
    └── utils/                      # Utilidades y constantes
        ├── index.js
        └── screens.js
```

### Arquitectura de la Aplicación:
- **App.js**: Componente raíz con NavigationContainer
- **AppNavigation.js**: Configuración del Stack Navigator
- **HomeScreen.js**: Pantalla de bienvenida con acceso a la calculadora
- **CalculatorScreen.js**: Calculadora funcional con display y botones
- **HistoryScreen.js**: Lista de operaciones realizadas
- **SettingsScreen.js**: Configuración y ajustes de la aplicación
- **screens.js**: Constantes para nombres de pantallas

## 5. Instalación y Configuración

### Instalación de Dependencias:
```bash
# Clonar el repositorio
git clone https://github.com/usuario/calculator-app
cd calculator-app

# Instalar dependencias
npm install
```

### Dependencias del Proyecto:

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| `@react-navigation/native` | ^7.1.17 | Core de navegación entre pantallas, manejo de estado de navegación |
| `@react-navigation/native-stack` | ^7.3.26 | Stack navigator para navegación jerárquica (Home → Calculator → History/Settings) |
| `react-native-screens` | ~4.16.0 | Optimización de rendimiento para transiciones nativas |
| `react-native-safe-area-context` | ~5.6.0 | Manejo de áreas seguras (notch, barras de estado) |
| `expo-status-bar` | ~3.0.8 | Control de apariencia de barra de estado |
| `expo` | ~54.0.3 | Framework de desarrollo móvil |
| `react` | 19.1.0 | Biblioteca de interfaz de usuario |
| `react-native` | 0.81.4 | Framework de desarrollo móvil multiplataforma |

### Verificar instalación:
```bash
npm list --depth=0
```

## 6. Ejecución de la Aplicación

### Scripts Disponibles:
```bash
# Iniciar servidor de desarrollo
npm start
# o
npx expo start

# Ejecutar en Android (emulador/dispositivo)
npm run android
# o
npx expo start --android

# Ejecutar en iOS (solo macOS)
npm run ios
# o  
npx expo start --ios

# Ejecutar en web
npm run web
# o
npx expo start --web
```

### Primera Ejecución:
1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```

3. **Conectar dispositivo:**
   - **Android:** Usar Expo Go o emulador
   - **iOS:** Usar Expo Go o simulador
   - **Web:** Se abrirá automáticamente en el navegador

### Notas de Entorno:
- **Emulador Android:** Debe estar iniciado antes de ejecutar `npm run android`
- **Dispositivo físico:** Usar Expo Go y escanear QR code
- **Túnel para redes restrictivas:** `npx expo start --tunnel`

## 7. Funcionalidades de la Aplicación

### Pantalla de Inicio (HomeScreen):
- **Pantalla de Bienvenida**: Introducción a la aplicación
- **Botón de Acceso**: Acceso directo a la calculadora
- **Diseño Elegante**: Interfaz limpia con tema oscuro
- **Navegación Simple**: Un toque para acceder a la calculadora

![Pantalla de Inicio](src/screenshots/pantalla1.jpg)

### Pantalla de Calculadora (CalculatorScreen):
- **Display Digital**: Muestra números y resultados en tiempo real
- **Operaciones Básicas**: 
  - ➕ Suma
  - ➖ Resta
  - ✖️ Multiplicación
  - ➗ División
- **Funciones Especiales**:
  - **C** - Limpia toda la operación
  - **⌫** - Elimina el último dígito
  - **.** - Punto decimal
  - **=** - Calcula el resultado
- **Botones de Navegación**:
  - **←** - Regresa a la pantalla anterior
  - **📋** - Abre el historial de operaciones
  - **⚙️** - Abre configuración
- **Diseño Ergonómico**: Botones grandes y fáciles de presionar
- **Feedback Visual**: Colores diferenciados por tipo de botón

![Pantalla de Calculadora](src/screenshots/pantalla2.jpg)

### Pantalla de Historial (HistoryScreen):
- **Lista de Operaciones**: Muestra todas las operaciones realizadas
- **Formato Legible**: Operación completa con resultado
- **Scroll Vertical**: Desplazamiento suave por el historial
- **Mensaje de Estado**: Indica cuando el historial está vacío
- **Botón de Retorno**: Regresa a la calculadora

### Pantalla de Configuración (SettingsScreen):
- **Modo Oscuro**: Activar/desactivar tema oscuro (actualmente activo)
- **Vibración**: Control de feedback háptico
- **Sonido**: Control de efectos de sonido
- **Acerca de**: Información de versión de la aplicación
- **Switches Interactivos**: Controles visuales modernos
- **Diseño Organizado**: Configuraciones en tarjetas separadas

### Características Técnicas:
- **Navegación Stack**: Transiciones suaves entre pantallas
- **Estado Persistente**: Mantiene historial durante la sesión
- **Diseño Responsivo**: Optimizado para diferentes tamaños de pantalla
- **Tema Oscuro Consistente**: Paleta de colores uniforme
- **Componentes Modulares**: Código organizado y reutilizable
- **Performance Optimizado**: Renderizado eficiente

## 8. Desarrollo y Extensión

### Próximas Funcionalidades Sugeridas:
- **Historial Persistente**: Guardar historial con AsyncStorage
- **Operaciones Avanzadas**: 
  - Raíz cuadrada
  - Potencias
  - Porcentajes
  - Funciones trigonométricas
- **Múltiples Temas**: Tema claro, oscuro y personalizado
- **Calculadora Científica**: Modo científico con funciones avanzadas
- **Copiar Resultados**: Portapapeles para compartir resultados
- **Conversión de Unidades**: Integración con conversor
- **Gráficas**: Visualización de operaciones
- **Voz**: Control por comandos de voz

### Estructura para Nuevas Pantallas:
```javascript
// Ejemplo de nueva pantalla
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function NewScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Contenido de la pantalla */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});
```

### Agregar Nuevas Rutas:
1. Actualizar `src/utils/screens.js` con nuevas constantes
2. Agregar Screen en `src/navigations/AppNavigation.js`
3. Crear componente en `src/screens/`

### Ejemplo de Extensión:
```javascript
// En screens.js
const calculator = {
  calculatorScreen: "CalculatorScreen",
  historyScreen: "HistoryScreen",
  settingsScreen: "SettingsScreen",
  scientificScreen: "ScientificScreen", // Nueva pantalla
};

// En AppNavigation.js
<Stack.Screen
  name={screens.calculator.scientificScreen}
  component={ScientificScreen}
/>
```

## 9. Troubleshooting

### Problemas Comunes:
| Problema | Solución |
|----------|----------|
| **Error de instalación** | `npm install --legacy-peer-deps` |
| **Metro cache corrupto** | `npx expo start --clear` |
| **Puerto ocupado** | `npx expo start --port 8082` |
| **Dependencias desactualizadas** | `npx expo doctor` |
| **App no se conecta** | Verificar red WiFi o usar `--tunnel` |
| **Botones no responden** | Verificar TouchableOpacity imports |

### Comandos Útiles:
```bash
# Verificar entorno
npx expo doctor

# Limpiar cache
npx expo start --clear

# Reinstalar dependencias
rm -rf node_modules package-lock.json && npm install

# Limpiar cache de Expo
expo start -c

# Ver logs detallados
npx expo start --dev-client
```

### Debug de Navegación:
```javascript
// En AppNavigation.js, agregar logging
<Stack.Navigator
  screenOptions={{
    headerShown: false,
  }}
  screenListeners={{
    state: (e) => {
      console.log('Navigation State:', e.data.state);
    },
  }}
>
```

## 10. Recursos y Documentación

### Documentación Oficial:
- [Documentación de Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Components](https://docs.expo.dev/versions/latest/)

### Tutoriales y Guías:
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [Expo Getting Started](https://docs.expo.dev/get-started/introduction/)
- [React Navigation Fundamentals](https://reactnavigation.org/docs/getting-started)

### Recursos Adicionales:
- [React Native Express](http://www.reactnativeexpress.com/)
- [Awesome React Native](https://github.com/jondot/awesome-react-native)
- [React Native Directory](https://reactnative.directory/)

---

## 11. Información Adicional

### Paleta de Colores:
```javascript
const colors = {
  background: '#1a1a1a',      // Fondo principal
  header: '#252525',           // Fondo del header
  button: '#333',              // Botones numéricos
  functionButton: '#505050',   // Botones de función
  operatorButton: '#FF9500',   // Botones de operación
  equalsButton: '#4CAF50',     // Botón igual
  text: '#fff',                // Texto principal
  textSecondary: '#888',       // Texto secundario
};
```

### Estructura de Estados:
```javascript
// Estados principales en CalculatorScreen
const [display, setDisplay] = useState('0');
const [history, setHistory] = useState([]);
const [currentOperation, setCurrentOperation] = useState(null);
const [previousValue, setPreviousValue] = useState(null);
const [waitingForOperand, setWaitingForOperand] = useState(false);
```

### Licencia:
MIT License - Libre para uso educativo y comercial

---

**Desarrollado por:** [Tu Nombre]  
**Profesor:** M.C. Leonel González Vidales  
**Última actualización:** 7 de octubre 2025  
**Versión:** 1.0.0