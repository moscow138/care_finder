'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const CategorySchema = z
  .object({
    categoryname: z.string().min(1, 'A name is required!').max(100),
    categoryimage: z.string().min(1, 'Image is required'),

  })


const AddCategoryForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      categoryname: '',
      categoryimage: '',
    }
  });
 //send form data using POST method to database..
  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    const response = await fetch('/api/category', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        categoryname: values.categoryname,
        categoryimage: values.categoryimage,
        
      })
    });
 //check if submit is successful... 
 if(response.ok){
  //redirect user to sigin page...
  router.push('/admin');
 }else{
  console.error('Adding New category Failed!')
  toast({
    title: "Error",
    description: "Adding New category Failed, Please try again!",
    variant: "destructive"
  })
 }

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='categoryname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter category name</FormLabel>
                <FormControl>
                  <Input placeholder='clinic, hospital,...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='categoryimage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input type='file' placeholder='logo.png jpg jpeg ...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
 
        </div>
        <Button className='w-full mt-6' type='submit'>
          Add
        </Button>
      </form>    
    </Form>
  );
};

export default AddCategoryForm;
