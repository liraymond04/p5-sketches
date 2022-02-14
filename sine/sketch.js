let wave;

let x, y, w, h;

let x_slider, y_slider, w_slider, h_slider;
let t_slider, a_slider, p_slider, m_slider;

let red_slider, green_slider, blue_slider;

let t_input, a_input, p_input, m_input;

function setup() {
    // 76 bpm

    // variables

	createCanvas(windowWidth, windowHeight);

    create_elements();
    set_element_positions();

    wave = new Sine(0, 16, 500, 0);

    frameRate(1.26666666667 * 30);
}

function draw() {
    background(0);

    handle_sliders();
    handle_wave();
}

function create_elements() {
    x_slider = createSlider(1, 128 * 8, 8, 1);
    y_slider = createSlider(1, 32, 16, 1);
    w_slider = createSlider(1, 32, 10, 1);
    h_slider = createSlider(1, 32, 10, 1);

    t_slider = createSlider(-1, 1, 0, 0.01);
    a_slider = createSlider(-32, 32, 16, 0.01);
    p_slider = createSlider(0, 1000, 500, 0.01);
    m_slider = createSlider(-10, 10, 0, 0.01);

    red_slider = createSlider(0, 255, 0, 1);
    green_slider = createSlider(0, 255, 0, 1);
    blue_slider = createSlider(0, 255, 0, 1);

    // t_input = createInput();
    // a_input = createInput();
    // p_input = createInput();
    // m_input = createInput();
}

function set_element_positions() {
    t_slider.position(0, height - 20);
    a_slider.position(150, height - 20);
    p_slider.position(300, height - 20);
    m_slider.position(450, height - 20);

    x_slider.position(0, 20);
    y_slider.position(150, 20);
    w_slider.position(300, 20);
    h_slider.position(450, 20);

    // t_input.position(t_slider.position().x + 90, t_slider.position().y-5);
    // a_input.position(a_slider.position().x + 90, a_slider.position().y-5);
    // p_input.position(p_slider.position().x + 90, p_slider.position().y-5);
    // m_input.position(m_slider.position().x + 90, m_slider.position().y-5);
}

function handle_sliders() {
    fill(255);
    text("Change time", t_slider.position().x, t_slider.position().y-5);
    text("Amplitude", a_slider.position().x, a_slider.position().y-5);
    text("Period", p_slider.position().x, p_slider.position().y-5);
    text("Midline", m_slider.position().x, m_slider.position().y-5);

    // t_input.value(t_slider.value());
    // a_input.value(a_slider.value());
    // p_input.value(p_slider.value());
    // m_input.value(m_slider.value());

    text(t_slider.value(), t_slider.position().x + 90, t_slider.position().y-5);
    text(a_slider.value(), a_slider.position().x + 90, a_slider.position().y-5);
    text(p_slider.value(), p_slider.position().x + 90, p_slider.position().y-5);
    text(m_slider.value(), m_slider.position().x + 90, m_slider.position().y-5);

    text("X Spacing", x_slider.position().x, x_slider.position().y-5);
    text("Y Spacing", y_slider.position().x, y_slider.position().y-5);
    text("Dot Width", w_slider.position().x, w_slider.position().y-5);
    text("Dot Height", h_slider.position().x, h_slider.position().y-5);

    text(x_slider.value(), x_slider.position().x + 90, x_slider.position().y-5);
    text(y_slider.value(), y_slider.position().x + 90, y_slider.position().y-5);
    text(w_slider.value(), w_slider.position().x + 90, w_slider.position().y-5);
    text(h_slider.value(), h_slider.position().x + 90, h_slider.position().y-5);
}

function handle_wave() {
    wave.theta += t_slider.value();
    wave.amplitude = a_slider.value();
    wave.period = p_slider.value();
    wave.midline = m_slider.value();

    x = x_slider.value();
    y = y_slider.value();
    w = w_slider.value();
    h = h_slider.value();

    wave.calcWave(x, y);
    wave.renderWave(w, h, red_slider.value(), green_slider.value(), blue_slider.value());
}
