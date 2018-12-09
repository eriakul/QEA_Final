import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider, Button, RadioButtons

w_limit = 10

fig, ax = plt.subplots()

plt.subplots_adjust(left=0.25, bottom=0.25)

t = np.arange(-1*w_limit, w_limit, 0.001)

b0 = 1
m0 = 1
k0 = 1

s = 1/(-1*w**2 * m0 + k0 +  )
l, = plt.plot(t, s, lw=2, color='red')
plt.axis([0, 1, -10, 10])

axcolor = 'lightgoldenrodyellow'
axfreq = plt.axes([0.25, 0.1, 0.65, 0.03], facecolor=axcolor)
axamp = plt.axes([0.25, 0.15, 0.65, 0.03], facecolor=axcolor)

m_slider = Slider(axfreq, 'Mass', 0.1, 10.0, valinit=f0)
b_slider = Slider(axamp, 'Damping Constant', 0.0, 10.0, valinit=a0)
k_slider = Slider(axfreq, 'Spring Constant', 0.0, 10.0, valinit=f0)



def update(val):
    amp = samp.val
    freq = sfreq.val
    l.set_ydata(amp*np.sin(2*np.pi*freq*t))
    fig.canvas.draw_idle()
m_slider.on_changed(update)
b_slider.on_changed(update)
k_slider.on_changed(updat

resetax = plt.axes([0.8, 0.025, 0.1, 0.04])
button = Button(resetax, 'Reset', color=axcolor, hovercolor='0.975')


def reset(event):
    sfreq.reset()
    samp.reset()
button.on_clicked(reset)

rax = plt.axes([0.025, 0.5, 0.15, 0.15], facecolor=axcolor)
radio = RadioButtons(rax, ('red', 'blue', 'green'), active=0)


def colorfunc(label):
    l.set_color(label)
    fig.canvas.draw_idle()
radio.on_clicked(colorfunc)

plt.show()
