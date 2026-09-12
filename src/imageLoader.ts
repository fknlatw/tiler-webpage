import "./style.css";

const app: any = document.getElementById("app");

app.innerHTML += `
    <section class="fixed top-0 right-0 flex justify-center align-middle">
        <form class="p-8 text-slate-900 border-t border-slate-200 bg-white">
            <label for="file">Файл</label>
            <input name="file" class="file_input" type="file" />
            <button type="submit">Загрузить</button>
        </form>
    </section>
`;
