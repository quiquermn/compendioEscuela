# Física I

## Breve Introducción (En desarrollo)

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quidem dignissimos? Laborum ullam temporibus ipsa sunt aliquam obcaecati ipsam recusandae, harum, similique iure, nemo corrupti dignissimos eaque modi voluptate dolorum.

## Primer Parcial (En desarrollo)

## Segundo Parcial (En desarrollo)

### Multiplicación de vectores

#### Escalar por vector

El producto de un escalar $s$ y un vector $\vec{v}$ es un nuevo vector cuya magnitud es $sv$ con dirección idéntica a $\vec{v}$ si $s$ es positiva y opuesta si es negativa.

Para dividir $\vec{v}$ entre $s$, se multiplica $\vec{v}$ por $\frac{1}{s}$.

#### Producto Escalar

El **producto escalar (producto punto)** de dos vectores es un **número real** formado por el producto de sus magnitudes y el coseno del ángulo más pequeño entre ellos. Su **representación matemática** es la siguiente, donde $\vec{a}$ y $\vec{b}$ son los vectores y $\theta$ es el ángulo entre ellos:

$$
\vec{a} \cdot \vec{b} = ab \cos\theta
$$

El producto escalar de dos vectores es un número real, por lo tanto no tiene dirección. Sin embargo, se puede decir que el producto escalar de dos vectores es positivo si el ángulo entre ellos es menor a 90°, negativo si el ángulo entre ellos es mayor a 90° y 0 si el ángulo entre ellos es 90°.

La ley conmutativa aplica al producto escalar, por lo tanto se puede decir que: $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$.

Basándose en las reglas previamente introducidas, se pueden obtener los siguientes **productos notables**:

$$
\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1
$$

$$
\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0
$$

Cuando dos vectores están en **notación de unitarios**, su producto punto se puede escribir como:

$$
\vec{a} \cdot \vec{b} = (a_{x}\hat{i} + a_{y}\hat{j} + a_{z}\hat{k}) \cdot (b_{x}\hat{i} + b_{y}\hat{j} + b_{z}\hat{k})
$$

Lo cual se puede expandir debido a la ley distributiva y a los productos notables en:

$$
\vec{a} \cdot \vec{b} = a_{x}b_{x} + a_{y}b_{y} + a_{z}b_{z}
$$

#### Producto vectorial

El **producto vectorial (producto cruz)** de dos vectores es un nuevo vector perpendicular al plano formado por los vectores originales. Su magnitud es el producto de las magnitudes de los vectores originales y el seno del ángulo más pequeño entre ellos. Su **representación matemática** es la siguiente, donde $\vec{a}$ y $\vec{b}$ son los vectores y $\theta$ es el ángulo entre ellos:

$$
\left | \vec{a} \times \vec{b} \right | = ab \sin\theta
$$

Para saber el sentido del vector resultante se utiliza algo conocido como la **regla de la mano derecha** y consiste en colocar los dos vectores cola a cola sin alterar sus orientaciones, e imaginar una línea perpendicular a su plano. Pretende poner tu mano derecha alrededor de dicha línea de manera en la que tus dedos cierren el ángulo más pequeño entre ellos, y tu pulgar estirado apunta hacia la dirección del vector nuevo.

En el producto cruz, el orden de la multiplicación es importante, porque:

$$
\vec{a} \times \vec{b} = -(\vec{b} \times \vec{a})
$$

Basándose en las reglas previamente introducidas, se pueden obtener los siguientes **productos notables**:

$$
\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0}
$$

$$
\hat{i} \times \hat{j} = \hat{k}
$$

$$
\hat{j} \times \hat{k} = \hat{i}
$$

$$
\hat{k} \times \hat{i} = \hat{j}
$$

$$
\hat{j} \times \hat{i} = -\hat{k}
$$

$$
\hat{k} \times \hat{j} = -\hat{i}
$$

$$
\hat{i} \times \hat{k} = -\hat{j}
$$

La ley distributiva sí aplica en el producto vectorial, por lo que el producto cruz de dos vectores en notación unitaria se puede expandir a:

$$
\vec{a} \times \vec{b} = (a_{y}b_{z} - b_{y}a_{z})\hat{i} + (a_{z}b_{x} - b_{z}a_{x})\hat{j} + (a_{x}b_{y} - b_{x}a_{y})\hat{k}
$$

Si el producto cruz da como resultado $\vec{0}$, significa que son **paralelos**:

$$
\vec{a} \times \vec{b} = \vec{0} \quad \therefore \theta = 0^{\circ}
$$

### Equilibrio

#### 1° Condición

Un cuerpo está en **equilibrio traslacional** si la suma vectorial de las fuerzas que actúan sobre dicho cuerpo es 0. Es decir:

$$
\sum \vec{F} = 0
$$

#### 2° Condición

Un cuerpo está en **equilibrio rotacional** si la suma vectorial de los torques que actúan sobre dicho cuerpo es 0. Es decir:

$$
\sum \tau _{o} = 0
$$
