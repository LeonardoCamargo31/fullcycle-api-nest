import { Category } from "./category.entity"

describe('category unit tests',()=>{
  describe('constructor',()=>{
    it('should create a category with default values',()=>{
      // arrange (input)
      // act (action)
      // assert (output)
      const category = new Category({
        name: 'movie'
      })
      expect(category.categoryId).toBeUndefined()
      expect(category.name).toBe('movie')
      expect(category.description).toBeNull()
      expect(category.isActive).toBe(true)
      expect(category.createdAt).toBeInstanceOf(Date)
    })

    it('should create a category with all values',()=>{
      const category = new Category({
        name: 'movie',
        description: 'movie description',
        isActive: false,
        createdAt: new Date()
      })

      expect(category.categoryId).toBeUndefined()
      expect(category.name).toBe('movie')
      expect(category.description).toBe('movie description')
      expect(category.isActive).toBe(false)
      expect(category.createdAt).toBeInstanceOf(Date)
    })

    it('should create a category with name and description',()=>{
      const category = new Category({
        name: 'movie',
        description: 'movie description'
      })

      expect(category.categoryId).toBeUndefined()
      expect(category.name).toBe('movie')
      expect(category.description).toBe('movie description')
      expect(category.isActive).toBe(true)
      expect(category.createdAt).toBeInstanceOf(Date)
    })
  })

  describe('create command', () => {
    test('should create a category', () => {
      const category = Category.create({
        name: 'movie',
      });

      expect(category.categoryId).toBeUndefined();
      expect(category.name).toBe('movie');
      expect(category.description).toBeNull();
      expect(category.isActive).toBe(true);
      expect(category.createdAt).toBeInstanceOf(Date);
    });

    test('should create a category with description', () => {
      const category = Category.create({
        name: 'movie',
        description: 'some description',
      });

      expect(category.categoryId).toBeUndefined();
      expect(category.name).toBe('movie');
      expect(category.description).toBe('some description');
      expect(category.isActive).toBe(true);
      expect(category.createdAt).toBeInstanceOf(Date);
    });

    test('should create a category with isActive', () => {
      const category = Category.create({
        name: 'movie',
        isActive: false,
      });

      expect(category.categoryId).toBeUndefined();
      expect(category.name).toBe('movie');
      expect(category.description).toBeNull();
      expect(category.isActive).toBe(false);
      expect(category.createdAt).toBeInstanceOf(Date);
    });
  });

  test('should change name', () => {
    const category = new Category({
      name: 'movie',
    });

    category.changeName('other name');
    expect(category.name).toBe('other name');
  });

  test('should change description', () => {
    const category = new Category({
      name: 'movie',
    });

    category.changeDescription('some description');
    expect(category.description).toBe('some description');
  });

  test('should active a category', () => {
    const category = new Category({
      name: 'filmes',
      isActive: false,
    });

    category.activate();
    expect(category.isActive).toBe(true);
  });

  test('should disable a category', () => {
    const category = new Category({
      name: 'Filmes',
      isActive: true,
    });
    category.deactivate();
    expect(category.isActive).toBe(false);
  });
})