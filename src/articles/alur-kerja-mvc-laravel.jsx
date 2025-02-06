import { formatRelativeTime } from "../utils/formatDate";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import scriptsArticleMvc from "../data/scripts/scriptsArticleMvc";
import TextHighlight from "../components/common/TextHighlight";

const AlurkerjaMVC = ({ date }) => {
    return (
        <div className="mx-auto  break-words">
            <h2 className="text-3xl font-bold mb-6 md:text-5xl">Memahami dan Implementasi MVC Pattern di Laravel</h2>
            <p className="text-gray-600 mb-4">{formatRelativeTime(date)}</p>
            <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mt-6 mb-4">Pengantar</h3>
                <p>
                    MVC (Model-View-Controller) adalah salah satu design pattern yang paling populer dalam pengembangan web. Laravel mengadopsi pattern ini untuk membuat struktur aplikasi yang terorganisir dan mudah di-maintain. Di artikel ini, kita akan mempelajari implementasi MVC di Laravel 11 dengan contoh praktis.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">Prerequisites</h3>
                <ul className="list-disc ml-6 mb-4">
                    <li>PHP 8.2 atau yang lebih tinggi</li>
                    <li>Composer (package manager untuk PHP)</li>
                    <li>MySQL atau database yang didukung Laravel</li>
                    <li>Laravel 11</li>
                    <li>Text editor atau IDE (VSCode, PHPStorm, dll)</li>
                    <li>Pengetahuan dasar tentang PHP dasar dan OOP</li>
                </ul>
                <h3 className="text-2xl font-bold mt-6 mb-4">Setup Project</h3>
                <p>
                    Pertama, mari buat project Laravel baru:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.setupLaravel}
                </SyntaxHighlighter>
                <h3 className="text-2xl font-bold mt-6 mb-2 italic">Nahh sekarang kota masuk ke MVC nya</h3>
                <h3 className="text-2xl font-bold mt-6 mb-4">Model</h3>
                <p className="mt-4">
                    Model merepresentasikan data dan tabel. Mari buat model Post untuk blog sederhana:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.makeModel}
                </SyntaxHighlighter>
                <p className="mt-2">
                    Ini akan membuat file <TextHighlight text={'app/Models/Post.php'}/> dan migration file.
                </p>
                <p className="mt-6">Edit Model: </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.editModel}
                </SyntaxHighlighter>
                <p className="mt-6">Edit migration file di <TextHighlight text={'database/migrations/[timestamp]_create_posts_table.php'} /></p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.editMigration}
                    </SyntaxHighlighter>
                <h3 className="text-2xl font-bold mt-6 mb-4">Controller</h3>
                <p className="mt-6">Controller menangani request dan mengatur flow aplikasi. Buat PostController:</p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.makeControllerResource}
                </SyntaxHighlighter>
                <p className="mt-6">Edit <TextHighlight text={'app/Http/Controllers/PostController.php'} />:</p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.editPostController}
                </SyntaxHighlighter>
                <h3 className="text-2xl font-bold mt-6 mb-4">View</h3>
                <p className="mt-6">Views menangani tampilan aplikasi. Buat beberapa blade files:
                    <TextHighlight text={'resources/views/posts/index.blade.php'} />:</p>
                <SyntaxHighlighter language="html" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.view}
                </SyntaxHighlighter>
                <p className="mt6">Disini saya belum menjelaskan <TextHighlight text={'<x-app-layiyt></x-app-layiyt>'}/>, nanti akan akan saya bahas pada tutorial laravel component, intinya tag itu adalah komponen di component itu tambahkan navbar dan footer, dllnya jadi semua yanga da di dalam tag itu di anggap childrennya</p>
                <h3 className="text-2xl font-bold mt-6 mb-4">Routes</h3>
                <p className="mt-6">Tambahkan routes di <TextHighlight text={'routes/web.php'} />:</p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticleMvc.route}
                </SyntaxHighlighter>
                <h3 className="text-2xl font-bold mt-6 mb-4">Best Practices</h3>
                <h4 className="text-lg font-semibold mt-4 mb-2">Model Best Practices</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Gunakan fillable atau guarded untuk mass assignment protection</li>
                    <li>Definisikan relationships di model</li>
                    <li>Gunakan model scopes untuk query yang sering digunakan</li>
                    <li>Validasi sebaiknya di level request</li>
                </ul>
                <h4 className="text-lg font-semibold mt-4 mb-2">Controller Best Practices</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Keep controllers thin, business logic di service layer</li>
                    <li>Gunakan form requests untuk validasi kompleks</li>
                    <li>Implementasi single responsibility principle</li>
                    <li>Gunakan resource controllers untuk CRUD operations</li>
                </ul>
                <h4 className="text-lg font-semibold mt-4 mb-2">View Best Practices</h4>
                <ul className="list-disc ml-6 mb-4">
                    <li>Gunakan blade components untuk reusable UI elements</li>
                    <li>Implementasi layouts untuk konsistensi</li>
                    <li>Hindari logic kompleks di view</li>
                    <li>Manfaatkan blade directives</li>
                </ul>

                <h3 className="text-2xl font-bold mt-6 mb-4">Flow MVC di Laravel</h3>
                <ul className="list-decimal ml-6 mb-4">
                    <li>User mengakses URL /posts</li>
                    <li>Route mengarahkan ke PostController@index</li>
                    <li>Model mengambil data dari database</li>
                    <li>Controller menerima data dan mengirim ke view</li>
                    <li>View menampilkan data dengan template blade</li>
                </ul>
                <h3 className="text-2xl font-bold mt-6 mb-4">Kesimpulan</h3>
                <p className="mt-6">MVC Pattern di Laravel 11 membantu kita:</p>

                <ul className="list-decimal ml-6 mb-4">
                    <li>Memisahkan logic aplikasi dengan jelas</li>
                    <li>Membuat code lebih maintainable</li>
                    <li>Mempermudah testing</li>
                    <li>Mengorganisir code dengan lebih baik</li>

                </ul>
                <p className="mt-6">Dengan mengikuti pattern dan best practices ini, kita bisa membuat aplikasi Laravel yang scalable dan mudah di-maintain.</p>
            </div>
        </div>
    );
};

export default AlurkerjaMVC;