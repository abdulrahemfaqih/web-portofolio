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
                <p className="mt-4">
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

                <h3 className="text-2xl font-bold mt-6 mb-4">5. Langkah 4: Buat Service</h3>
                <p>
                    Buat direktori `Services` dalam `app/` dan buat file `ProductService.php`:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\Services;

use App\Repositories\ProductRepositoryInterface;
use App\Notifications\ProductNotification;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\ProductsExport;
use App\Imports\ProductsImport;

class ProductService
{
    protected $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getAllProducts()
    {
        return $this->productRepository->all();
    }

    public function getProductById($id)
    {
        return $this->productRepository->find($id);
    }

    public function createProductWithImage(array $data, $image)
    {
        $data['image'] = $this->productRepository->uploadImage($image);
        $product = $this->productRepository->create($data);
        return $product;
    }

    public function updateProductWithImage($id, array $data, $image = null)
    {
        if ($image) {
            $product = $this->productRepository->find($id);
            $this->productRepository->deleteImage($product->image);
            $data['image'] = $this->productRepository->uploadImage($image);
        }
        return $this->productRepository->update($id, $data);
    }

    public function deleteProduct($id)
    {
        $product = $this->productRepository->find($id);
        $this->productRepository->deleteImage($product->image);
        return $this->productRepository->delete($id);
    }

    public function exportProducts()
    {
        return Excel::download(new ProductsExport, 'products.xlsx');
    }

    public function importProducts($file)
    {
        Excel::import(new ProductsImport, $file);
    }
}
` }
                    </code>
                </pre>

                <h3 className="text-2xl font-bold mt-6 mb-4">6. Langkah 5: Buat Controller</h3>
                <p>
                    Buat controller `ProductController.php`:
                </p>

                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`php artisan make:controller ProductController`}
                    </code>
                </pre>

                <p className="mt-4">
                    Edit file controller di `app/Http/Controllers/ProductController.php`:
                </p>

                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        $products = $this->productService->getAllProducts();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = $request->file('image');
        $product = $this->productService->createProductWithImage($data, $image);
        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = $this->productService->getProductById($id);
        return response()->json($product);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|numeric',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = $request->file('image');
        $product = $this->productService->updateProductWithImage($id, $data, $image);
        return response()->json($product);
    }

    public function destroy($id)
    {
        $this->productService->deleteProduct($id);
        return response()->json(null, 204);
    }

    public function export()
    {
        return $this->productService->exportProducts();
    }

    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,xls',
        ]);

        $this->productService->importProducts($request->file('file'));
        return response()->json(['message' => 'Products imported successfully']);
    }
}
`}
                    </code>
                </pre>

                <h3 className="text-2xl font-bold mt-6 mb-4">7. Langkah 6: Binding Interface dan Repository</h3>
                <p>
                    Buka file app/Providers/AppServiceProvider.php dan tambahkan binding:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`use App\Repositories\ProductRepositoryInterface;
use App\Repositories\ProductRepository;

public function register(): void
{
    $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
}
`}
                    </code>
                </pre>

                <h3 className="text-2xl font-bold mt-6 mb-4">8. Langkah 7: Buat Export/Import</h3>
                <p>
                    Buat file ProductsExport.php di app/Exports/:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromCollection;

class ProductsExport implements FromCollection
{
    public function collection()
    {
        return Product::all();
    }
}
`}
                    </code>
                </pre>
                <p className="mt-4">
                    Buat file ProductsImport.php di app/Imports/:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`namespace App\Imports;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductsImport implements ToModel
{
    public function model(array $row)
    {
        return new Product([
            'name' => $row[0],
            'description' => $row[1],
            'price' => $row[2],
        ]);
    }
}
`}
                    </code>
                </pre>

                <h3 className="text-2xl font-bold mt-6 mb-4">9. Langkah 8: Routing</h3>
                <p>
                    Buka file routes/api.php dan tambahkan routes:
                </p>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>
                        {`use App\Http\Controllers\ProductController;

Route::apiResource('products', ProductController::class);
Route::get('/products/export', [ProductController::class, 'export']);
Route::post('/products/import', [ProductController::class, 'import']);
`}
                    </code>
                </pre>
                <h3 className="text-2xl font-bold mt-6 mb-4">Kesimpulan</h3>
                <p>
                    Dengan mengikuti langkah-langkah di atas, Anda telah berhasil mengimplementasikan CRUD, upload gambar, export/import Excel, dan notifikasi menggunakan Service Repository Pattern di Laravel 11. Kode Anda sekarang lebih terstruktur, modular, dan mudah di-maintain.
                </p>
            </div>
        </div>
    );
};

export default ImplementasiCrudLaravel11;