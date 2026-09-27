const form = document.querySelector('#checkout-form');
const message = document.querySelector('#message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止默认提交，不刷新页面或发送信息。
    form.classList.add('was-validated'); // 提交后才显示红色错误边框。

    if (!form.checkValidity()) {
        const invalidInput = form.querySelector(':invalid'); // 找到第一个无效项。
        message.textContent = invalidInput.validationMessage;
        invalidInput.focus(); // 将光标移到需要修改的字段。
        return; // 不再执行下方的注册成功代码。
    }

    message.textContent = '';
    alert('Registration complete! This is a demo; no order or payment was submitted.');
});
