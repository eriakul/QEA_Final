clear;
clc;

k = 24;
b = 8;
m = 25;

A = [0 1; -k/m -b/m];
B = [0; 1/m];
C = [1 0];
D = [0];

sys = ss(A,B,C,D);

step(sys);
%% clear;
clc;

k = 24;
b = 8;
m = 25;

A = [0 1; -k/m -b/m];
B = [0; 1/m];
C = [1 0];
D = [0];

sys = ss(A,B,C,D);

step(sys);
