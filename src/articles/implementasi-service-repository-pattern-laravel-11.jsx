import { formatRelativeTime } from "../utils/formatDate";

const ImplementasiCrudLaravel11 = ({ date }) => {
    return (
        <div className="container px-4 py-8 mx-auto  break-words">
            <h2 className="text-3xl font-bold mb-6 md:text-5xl">Implementasi CRUD + Fitur Tambahan di Laravel 11 dengan Service Repository Pattern</h2>
            <p className="text-gray-600 mb-4">{ formatRelativeTime(date) }</p>
            <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mt-6 mb-4">1. Pendahuluan</h3>
                <p>
                    Dalam tutorial ini, kita akan mengimplementasikan CRUD (Create, Read, Update, Delete) dengan fitur tambahan seperti upload gambar, export/import Excel, dan notifikasi menggunakan Service Repository Pattern di Laravel 11. Pola ini memisahkan logika bisnis (Service), akses data (Repository), dan controller, sehingga kode lebih modular dan mudah di-maintain.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">2. Langkah 1: Setup Awal</h3>
                <p>
                    Buat proyek Laravel 11:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`composer create-project laravel/laravel:^11 laravel-service-repo
cd laravel-service-repo`}
                    </code>
                </pre>
                <p className="mt-4">
                    Buat database dan sesuaikan file `.env`:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=`}
                    </code>
                </pre>

                <p className="mt-4">
                    3.	Install package Laravel Excel untuk fitur export/import:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`composer require maatwebsite/excel`}
                    </code>
                </pre>

                <p className="mt-4">
                    Publish konfigurasi Laravel Excel (opsional):
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`php artisan vendor:publish --provider="Maatwebsite\\Excel\\ExcelServiceProvider"`}
                    </code>
                </pre>




                <h3 className="text-2xl font-bold mt-6 mb-4">3. Langkah 2: Buat Model dan Migration</h3>
                <p>
                    Buat model Product beserta migration:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`php artisan make:model Product -m`}
                    </code>
                </pre>
                <p className="mt-4">
                    Edit file migration di database/migrations/xxxx_xx_xx_create_products_table.php:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`public function up(): void
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->text('description')->nullable();
        $table->decimal('price', 8, 2);
        $table->string('image')->nullable(); // Kolom untuk gambar
        $table->timestamps();
    });
}`}
                    </code>
                </pre>
                <p className="mt-4">
                    Jalankan migration:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`php artisan migrate`}
                    </code>
                </pre>

                <h3 className="text-2xl font-bold mt-6 mb-4">4. Langkah 3: Buat Repository</h3>
                <p>
                    Buat direktori `Repositories` dalam `app/` dan buat file `ProductRepositoryInterface.php`:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\\Repositories;

interface ProductRepositoryInterface
{
    public function all();
    public function find($id);
    public function create(array $data);
    public function update($id, array $data);
    public function delete($id);
    public function uploadImage($file);
    public function deleteImage($imagePath);
}`}
                    </code>
                </pre>
                <p>
                    Buat file `ProductRepository.php`:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\\Repositories;

use App\\Models\\Product;

class ProductRepository implements ProductRepositoryInterface
{
    protected $model;

    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update($id, array $data)
    {
        $product = $this->model->findOrFail($id);
        $product->update($data);
        return $product;
    }

    public function delete($id)
    {
        $product = $this->model->findOrFail($id);
        $product->delete();
        return $product;
    }

    public function uploadImage($file)
    {
        $imageName = time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('images'), $imageName);
        return 'images/' . $imageName;
    }

    public function deleteImage($imagePath)
    {
        if (file_exists(public_path($imagePath))) {
            unlink(public_path($imagePath));
        }
    }
}`}
                    </code>
                </pre>

                {/* Lanjutkan dengan langkah-langkah selanjutnya sesuai dengan PDF */}

                <h3 className="text-2xl font-bold mt-6 mb-4">Kesimpulan</h3>
                <p>
                    Dengan mengikuti langkah-langkah di atas, Anda telah berhasil mengimplementasikan CRUD, upload gambar, export/import Excel, dan notifikasi menggunakan Service Repository Pattern di Laravel 11. Kode Anda sekarang lebih terstruktur, modular, dan mudah di-maintain.
                </p>
            </div>
        </div>
    );
};

export default ImplementasiCrudLaravel11;