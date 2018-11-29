from sympy import *
x1, x2, Lambda = symbols('x1 x2 Lambda')
A = Matrix([[x1, 2], [x2, -3]])
print(A.eigenvals())  #returns eigenvalues and their algebraic multiplicity
print(A.eigenvects())  #returns eigenvalues, eigenvects
